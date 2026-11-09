![Cartzero](./.github/images/cartzerologo.png)

# Sobre o Cartzero

Plataforma de gestão de e-commerce multi-loja. Permite que lojistas cadastrem produtos, gerenciem pedidos e personalizem sua vitrine, enquanto clientes navegam e compram em uma loja pública.

O checkout é simulado: não há transações financeiras reais.

## Produtos

### Cartzero Admin

Painel do lojista.

- **Catálogo:** produtos, SKUs, preços, estoque e imagens
- **Pedidos:** listagem, detalhe e acompanhamento de status
- **Storefront:** conteúdo e aparência da loja
- **Settings:** configurações da loja e usuários
- **Dados:** informações de clientes

### Cartzero Ecom

Loja pública para o cliente final.

- **Home**
- **PLP:** listagem de produtos
- **PDP:** página de produto
- **Cart:** carrinho
- **Checkout:** finalização com pagamento simulado
- **Orderplaced:** confirmação do pedido
- **Login**
- **MyAccount:** dados e histórico de pedidos

## Arquitetura

- **Multi-tenant:** os dados são isolados por loja (`store_id`)
- **Aplicações separadas:** Admin e Ecom consomem a mesma API
- **Pedidos como máquina de estados:** `criado → pagamento aprovado → em separação → enviado → entregue` (ou `cancelado`)
- **Design tokens:** cores, tipografia e espaçamentos centralizados, permitindo tema por loja

## Stack

_A definir._

## Como rodar

_Em breve._
