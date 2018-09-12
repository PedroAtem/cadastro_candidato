import { CadastroCandidatoPage } from './app.po';

describe('cadastro-candidato App', () => {
  let page: CadastroCandidatoPage;

  beforeEach(() => {
    page = new CadastroCandidatoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
