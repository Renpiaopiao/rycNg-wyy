import { Inject, Injectable } from "@angular/core";
import { API_CONFIG, ServicesModule } from "./services.module";
import { Observable } from "rxjs";
import { Singer } from "./data-types/common.types";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/internal/operators";
import queryString from 'query-string';

type SingerParams =  {
  offset: number;
  limit: number; //每页条数
  cat?: string;
}

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: '5001'
};

@Injectable({
  providedIn: ServicesModule,
})
export class SingerService {
  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) {}

  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });

    return this.http
      .get(this.uri + "artist/list", { params })
      .pipe(map((res: { artists: Singer[] }) => res.artists));
  }
}
