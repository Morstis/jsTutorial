import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, startWith, switchMap } from 'rxjs/operators';
import { timer, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  timer$: Subject<number> = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.timer$
      .pipe(
        startWith(void 0),
        switchMap(() => timer(0, 1000))
      )
      .subscribe((res) => {
        console.log(res);
      });

    this.activatedRoute.params.pipe(take(1)).subscribe((param) => {
      window.scrollTo({
        top: window.innerHeight * param.titel,
        behavior: 'smooth',
      });
    });
    window.addEventListener('scroll', (e) => {
      this.timer$.next(void 0);
      this.router.navigate([
        (window.scrollY / window.innerHeight).toString().split('.')[0],
      ]);
    });
  }
}
