import { CryptoVisualPage } from './app.po';

describe('crypto-visual App', function() {
  let page: CryptoVisualPage;

  beforeEach(() => {
    page = new CryptoVisualPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
