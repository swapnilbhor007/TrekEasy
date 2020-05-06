import { TrekModule } from './trek.module';

describe('TrekModule', () => {
  let trekModule: TrekModule;

  beforeEach(() => {
    trekModule = new TrekModule();
  });

  it('should create an instance', () => {
    expect(trekModule).toBeTruthy();
  });
});
