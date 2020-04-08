import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { RegistrationService } from '@/_services';

@Component({ templateUrl: 'registrations.component.html' })
export class RegistrationsComponent implements OnInit {
    persons = null;

    constructor(
        private registrationService: RegistrationService
    ) { }

    ngOnInit() {
        this.loadAllPersons();
    }

    deleteUser(idNumber: number) {
        this.registrationService.delete(idNumber)
            .pipe(first())
            .subscribe(() => this.loadAllPersons());
    }

    private loadAllPersons() {
        this.registrationService.getAll()
            .pipe(first())
            .subscribe(persons => this.persons = persons);
    }
}