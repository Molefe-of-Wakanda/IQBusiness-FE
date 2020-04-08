import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '@/_models';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Person[]>(`http://localhost:8081/persons`);
    }

    register(persons: Person) {
        return this.http.post(`http://localhost:8081/persons/register`, persons);
    }

    delete(idNumber: number) {
        return this.http.delete(`http://localhost:8081/persons/${idNumber}`);
    }
}