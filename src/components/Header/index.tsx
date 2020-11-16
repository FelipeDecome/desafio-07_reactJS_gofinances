import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  page?: string;
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({
  page = 'listagem',
  size = 'large',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className={page === 'listagem' ? 'active' : ''} to="/">
          Listagem
        </Link>
        <Link className={page === 'importar' ? 'active' : ''} to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
