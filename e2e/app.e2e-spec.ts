import { PacketwerkPage } from './app.po';

describe('packetwerk App', () => {
  let page: PacketwerkPage;

  beforeEach(() => {
    page = new PacketwerkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
