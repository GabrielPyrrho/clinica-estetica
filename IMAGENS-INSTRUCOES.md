# 📸 Instruções para Adicionar as Imagens Reais

## 🎯 Organização das Imagens

### 1. Estrutura de Pastas
Crie as seguintes pastas dentro de `public/images/`:

```
public/
└── images/
    ├── logo/
    │   └── lumina-logo.png
    ├── antes-depois/
    │   ├── tratamento-facial-1.jpg
    │   ├── harmonizacao-facial-1.jpg
    │   ├── botox-rugas-1.jpg
    │   └── ...
    ├── hero/
    │   └── hero-background.jpg
    └── gallery/
        ├── clinica-1.jpg
        ├── clinica-2.jpg
        └── ...
```

### 2. Imagens Enviadas por Você

Baseado nas imagens que você enviou, organize assim:

#### **Imagem 1 - Tratamento Facial Completo**
- Arquivo: `antes-depois-facial-1.jpg`
- Pasta: `public/images/antes-depois/`
- Uso: Galeria de resultados, seção Hero

#### **Imagem 2 - Harmonização Facial** 
- Arquivo: `antes-depois-harmonizacao-1.jpg`
- Pasta: `public/images/antes-depois/`
- Uso: Seção de serviços, galeria

#### **Imagem 3 - Tratamento de Rugas (Botox)**
- Arquivo: `antes-depois-botox-1.jpg`
- Pasta: `public/images/antes-depois/`
- Uso: Seção de serviços específicos

#### **Logo da Lumina**
- Arquivo: `lumina-logo.png`
- Pasta: `public/images/logo/`
- Uso: Header, footer, favicon

## 🔧 Como Implementar

### 1. Salvar as Imagens
1. Salve cada imagem com os nomes sugeridos acima
2. Coloque nas pastas correspondentes
3. Otimize as imagens (recomendado: WebP, máximo 1MB cada)

### 2. Atualizar os Componentes

#### **Hero.tsx** - Linha ~85-120
```tsx
// Substitua os placeholders por:
<Image
  src="/images/antes-depois/antes-depois-facial-1.jpg"
  alt="Antes e depois - Tratamento facial"
  fill
  className="object-cover"
/>
```

#### **BeforeAfterGallery.tsx** - Linha ~15-35
```tsx
const beforeAfterImages = [
  {
    id: 1,
    title: 'Tratamento Facial Completo',
    description: 'Rejuvenescimento e harmonização facial',
    category: 'Facial',
    image: '/images/antes-depois/antes-depois-facial-1.jpg'
  },
  {
    id: 2,
    title: 'Harmonização Facial',
    description: 'Botox e preenchimento para harmonização',
    category: 'Harmonização',
    image: '/images/antes-depois/antes-depois-harmonizacao-1.jpg'
  },
  {
    id: 3,
    title: 'Tratamento de Rugas',
    description: 'Redução de linhas de expressão',
    category: 'Botox',
    image: '/images/antes-depois/antes-depois-botox-1.jpg'
  }
]
```

#### **Header.tsx** - Logo
```tsx
<Image
  src="/images/logo/lumina-logo.png"
  alt="Lumina Estética"
  width={48}
  height={48}
  className="rounded-full"
/>
```

### 3. Otimização das Imagens

#### Tamanhos Recomendados:
- **Logo**: 200x200px (PNG com fundo transparente)
- **Antes/Depois**: 800x800px (JPG, qualidade 85%)
- **Hero Background**: 1920x1080px (JPG, qualidade 80%)
- **Galeria**: 600x600px (JPG, qualidade 85%)

#### Ferramentas de Otimização:
- [TinyPNG](https://tinypng.com/) - Compressão online
- [Squoosh](https://squoosh.app/) - Google Web Dev
- Photoshop/GIMP - Exportar para web

## 🎨 Tratamento das Imagens

### Para as Fotos Antes/Depois:
1. **Recorte**: Mantenha proporção quadrada (1:1)
2. **Qualidade**: Alta resolução, mas otimizada para web
3. **Formato**: JPG para fotos, PNG para logos
4. **Marca d'água**: Adicione discreta da Lumina se desejar

### Exemplo de Edição:
```
Antes: 2MB, 3000x4000px
Depois: 200KB, 800x800px, qualidade 85%
```

## 📱 Responsividade

As imagens serão automaticamente otimizadas pelo Next.js para:
- Mobile: 400px
- Tablet: 600px  
- Desktop: 800px
- Retina: 1600px

## 🔄 Atualizações Futuras

### Adicionar Mais Imagens:
1. Mantenha a mesma estrutura de pastas
2. Use nomes descritivos
3. Atualize os arrays nos componentes
4. Teste em diferentes dispositivos

### Galeria Expandida:
- Adicione mais categorias de tratamentos
- Crie subpastas por tipo de procedimento
- Implemente lazy loading para performance

## ✅ Checklist Final

- [ ] Todas as imagens salvas nas pastas corretas
- [ ] Nomes de arquivo consistentes
- [ ] Imagens otimizadas (< 500KB cada)
- [ ] Componentes atualizados com caminhos corretos
- [ ] Testado em mobile e desktop
- [ ] Alt texts descritivos adicionados
- [ ] Backup das imagens originais

## 🚨 Importante

- **Direitos de Imagem**: Certifique-se de ter autorização das clientes
- **Privacidade**: Considere desfocar rostos se necessário
- **Qualidade**: Mantenha padrão profissional
- **Consistência**: Use mesmo estilo de fotografia

---

**Após implementar as imagens, o site estará 100% pronto para hospedagem!** 🚀