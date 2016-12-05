import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
    let EC;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ExampleComponent
    ]}));
    beforeEach(() => {
        EC = new ExampleComponent(); // important to create a new instance
    })

  it('should have a double method', () => {
    expect(EC.double).toBeDefined();
  });
  it('should return 8 when no input is given to double method', () => {
    expect(EC.double()).toEqual(8);
  });
  it('should return 4 when 2 is given to double method', () => {
    expect(EC.double(2)).toEqual(4);
  });
});