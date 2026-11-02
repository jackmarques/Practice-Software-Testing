export interface UsuarioLoginData {
  descricao: string;
  usuario: string;
  senha: string;
  sucesso: boolean;
  mensagemEsperada: string;
}

export const listaUsuarios: UsuarioLoginData[] = [
  {
    descricao: 'Cliente Válido (Jane Doe)',
    usuario: 'customer@practicesoftwaretesting.com',
    senha: 'welcome01',
    sucesso: true,
    mensagemEsperada: 'Jane Doe',
  },
  {
    descricao: 'Segundo Cliente Válido (Jack Howe)',
    usuario: 'customer2@practicesoftwaretesting.com',
    senha: 'welcome01',
    sucesso: true,
    mensagemEsperada: 'Jack Howe',
  },
  {
    descricao: 'Senha Incorreta para Usuário Existente',
    usuario: 'customer@practicesoftwaretesting.com',
    senha: 'SenhaIncorreta999!',
    sucesso: false,
    mensagemEsperada: 'Invalid email or password',
  },
  {
    descricao: 'Usuário Não Cadastrado / Restrito',
    usuario: 'bloqueado.inexistente@practicesoftwaretesting.com',
    senha: 'welcome01',
    sucesso: false,
    mensagemEsperada: 'Invalid email or password',
  },
];
