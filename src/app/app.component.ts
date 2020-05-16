import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { startWith, switchMap, map } from 'rxjs/operators';
import { timer, Subject, BehaviorSubject, Observable } from 'rxjs';
import data from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  console$ = new BehaviorSubject<string[]>(['del']);
  code$ = new BehaviorSubject<() => void>(() => {
    console.log('loading');
  });
  data = data;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngAfterViewInit() {
    window.scrollTo({
      top: window.innerHeight * this.activatedRoute.snapshot.params.titel,
      behavior: 'smooth',
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.console$.next(['del']);

      this.code$.next(data[parseInt(param.titel, 10)].code);
    });
    const timer$: Subject<number> = new Subject();
    window.console.log = (x) => {
      this.console$.next([
        ...this.console$.value,
        (typeof x === 'object' ? JSON.stringify(x) : x) +
          `
`,
      ]);
    };
    this.code$.subscribe((code) => {
      code();
    });
    timer$
      .pipe(
        // tslint:disable-next-line: deprecation
        startWith(void 0),
        switchMap(() => timer(0, 5000))
      )
      .subscribe((res) => {
        if (res !== 0) {
          window.scrollTo({
            top: window.innerHeight * this.activatedRoute.snapshot.params.titel,
            behavior: 'smooth',
          });
        }
      });
    window.addEventListener('scroll', () => {
      timer$.next(void 0);
      this.router.navigate([Math.round(window.scrollY / window.innerHeight)]);
    });
  }

  parseCode(): Observable<string> {
    return this.code$.pipe(
      map((x) =>
        x
          .toString()
          .split(/=>/)
          .join()
          .slice(7, -1)
          .split(
            `
`
          )
          .map((y) => y.slice(12)).join(`
`)
      )
    );
  }
  out() {
    return this.console$.pipe(
      map((x) => x.filter((y) => y !== 'del').join(''))
    );
  }
}
