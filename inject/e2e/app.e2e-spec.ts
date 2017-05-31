import { InjectPage } from './app.po';

describe('inject App', function() {
  let page: InjectPage;

  beforeEach(() => {
    page = new InjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
