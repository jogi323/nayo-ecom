import { nayoPage } from './app.po';

describe('nayo App', function() {
  let page: nayoPage;

  beforeEach(() => {
    page = new nayoPage();
  });

  it('should display Angle in h1 tag', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angle');
  });
});
