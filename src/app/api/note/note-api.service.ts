import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getServerUrl } from 'src/app/api/common/server/server.constants';
import { Note } from 'src/app/modules/notes/typings';

@Injectable({
  providedIn: 'root',
})
export class NoteApiService {
  private serverUrl = getServerUrl();

  constructor(private httpClient: HttpClient) {}

  public createNote(note: Note): Observable<Note> {
    return this.httpClient.post(`${this.serverUrl}/note`, {
      note,
    }) as Observable<Note>;
  }

  public getNotes(spaceId: number): Observable<Note[]> {
    return this.httpClient.get(`${this.serverUrl}/notes`, {
      params: { spaceId },
    }) as Observable<Note[]>;
  }

  public removeNote(note: Note): Observable<Note> {
    return this.httpClient.delete(`${this.serverUrl}/note`, {
      body: { note },
    }) as Observable<Note>;
  }
}
