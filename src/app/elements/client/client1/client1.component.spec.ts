import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client1Component } from './client1.component';

describe('Client1Component', () => {
  let component: Client1Component;
  let fixture: ComponentFixture<Client1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Client1Component]
    });
    fixture = TestBed.createComponent(Client1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
