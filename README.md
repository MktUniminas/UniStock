# UniStock - Sistema de Inventário

UniStock é um sistema completo de gestão de inventário de ativos, projetado para otimizar o controle e a gestão de equipamentos e periféricos empresariais.

## 🚀 Funcionalidades

- **Gestão de Ativos**: Cadastro e controle completo de equipamentos
- **Gestão de Funcionários**: Controle de colaboradores e atribuições
- **Movimentações**: Histórico completo de transferências e atribuições
- **Relatórios**: Análises detalhadas e auditorias
- **Dashboard**: Visão geral em tempo real do inventário

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd unistock
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

4. Para build de produção:
```bash
npm run build
```

## 🚀 Deploy no Vercel

### Método 1: Via GitHub (Recomendado)

1. Faça push do código para o GitHub
2. Conecte seu repositório no [Vercel Dashboard](https://vercel.com/dashboard)
3. O deploy será automático a cada push na branch main

### Método 2: Via Vercel CLI

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Execute o deploy:
```bash
vercel --prod
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Assets/          # Componentes de gestão de ativos
│   ├── Dashboard/       # Dashboard principal
│   ├── Employees/       # Gestão de funcionários
│   ├── Layout/          # Componentes de layout
│   ├── Movements/       # Movimentações
│   ├── Reports/         # Relatórios
│   └── Settings/        # Configurações
├── data/
│   └── mockData.ts      # Dados de exemplo
├── types/
│   └── index.ts         # Definições de tipos TypeScript
└── App.tsx              # Componente principal
```

## 🔧 Configuração de Variáveis de Ambiente

Para deploy no Vercel, configure as seguintes variáveis no dashboard:

- `NODE_ENV=production`

## 📊 Módulos do Sistema

### 1. Gestão de Ativos
- Cadastro de equipamentos e periféricos
- Controle de status e condições
- Especificações técnicas detalhadas

### 2. Gestão de Funcionários
- Cadastro de colaboradores
- Controle de departamentos e cargos
- Visualização de ativos atribuídos

### 3. Movimentações
- Registro de atribuições e transferências
- Histórico completo de movimentações
- Controle de devoluções e manutenções

### 4. Relatórios e Auditoria
- Relatórios personalizáveis
- Análises por tipo, funcionário e status
- Ferramentas de auditoria

## 🎨 Design System

O projeto utiliza um design system consistente com:
- Paleta de cores profissional
- Componentes reutilizáveis
- Interface responsiva
- Micro-interações e animações

## 📱 Responsividade

O sistema é totalmente responsivo, funcionando perfeitamente em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Segurança

- Validação de dados no frontend
- Estrutura preparada para autenticação
- Controle de acesso baseado em roles

## 📈 Performance

- Lazy loading de componentes
- Otimização de imagens
- Bundle splitting automático
- Cache de assets estáticos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas, entre em contato através de:
- Email: suporte@unistock.com
- Issues do GitHub: [Criar Issue](../../issues)

---

Desenvolvido com ❤️ para otimizar a gestão de inventário empresarial.