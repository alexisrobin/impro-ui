import { ImproUiPage } from './app.po';

describe('impro-ui App', function() {
  let page: ImproUiPage;

  beforeEach(() => {
    page = new ImproUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
