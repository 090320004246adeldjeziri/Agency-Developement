import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common Angular directives

@Component({
    selector: 'app-key-figures',
    standalone: true,
    imports: [CommonModule], // Import CommonModule
    templateUrl: './key-figures.component.html',
    styleUrls: ['./key-figures.component.css']
})
export class KeyFiguresComponent implements OnInit {
    figures = [
        { label: 'Mobile Apps', value: 25, currentValue: 0 },
        { label: 'Websites', value: 15, currentValue: 0 },
        { label: 'Desktop Software', value: 10, currentValue: 0 }
    ];

    animationTriggered = false;

    ngOnInit() {}

    @HostListener('window:scroll', [])
    onScroll() {
        const element = document.querySelector('.key-figures-container')!;
        const rect = element.getBoundingClientRect();

        if (!this.animationTriggered && rect.top < window.innerHeight) {
            this.animationTriggered = true;
            this.animateFigures();
        }
    }

    animateFigures() {
        this.figures.forEach(figure => {
            const interval = setInterval(() => {
                if (figure.currentValue < figure.value) {
                    figure.currentValue++;
                } else {
                    clearInterval(interval);
                }
            }, 20); // Adjust speed of animation
        });
    }
}
