import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomSyncComponent } from './bom-sync.component';

describe('BomSyncComponent', () => {
  let component: BomSyncComponent;
  let fixture: ComponentFixture<BomSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
