# App de Academia

1\. Paleta de Cores

A paleta de cores foi construída a partir da base encontrada na ferramenta Color Hunt, com a adição de uma cor de contraste para garantir a harmonia e a funcionalidade do design. As cores escolhidas buscam transmitir uma sensação de bem-estar, equilíbrio e motivação, afastando-se das paletas agressivas e saturadas comuns em academias tradicionais.

| Cor | Hexadecimal | Justificativa |
| --- | --- | --- |
| Fundo Suave | #FBF3D5 | Um tom de bege muito claro, quase branco, que serve como base. Transmite conforto e limpeza, reduzindo o cansaço visual e permitindo que os outros elementos se destaquem. |
| Verde Calmo | #D6DAC8 | Um verde-acinzentado claro que remete à natureza e ao bem-estar. Ideal para fundos secundários ou cards, reforçando a ideia de saúde e equilíbrio. |
| Verde Destaque | #9CAFAA | Um verde sálvia, um pouco mais escuro. Passa uma sensação de crescimento, renovação e calma. Pode ser usado em gráficos de progresso ou ícones. |
| Rosa Queimado | #D6A99D | Um tom terroso e acolhedor. Funciona como um ponto de cor quente para motivar sem ser agressivo. Ideal para botões de ação secundários ou elementos de destaque. |
| Azul Escuro | #3D5A6C | (Cor adicionada) Um azul-acinzentado escuro que serve como a cor principal para textos e elementos de alto contraste. Transmite seriedade, foco e estabilidade, garantindo excelente legibilidade. |
| Laranja queimado/terracota | #D97746 | Este tom de laranja queimado/terracota é a escolha perfeita para injetar energia e ação. Ele é vibrante, mas não é agressivo, e por ser um tom terroso, ele "conversa" perfeitamente com o seu Rosa Queimado (#D6A99D) e os verdes. Passa uma sensação de paixão, movimento e determinação. |
2\. Tipografia

A combinação de fontes foi escolhida para criar uma hierarquia visual clara, moderna e amigável, garantindo legibilidade em telas de diferentes tamanhos e uma identidade visual que inspira confiança e energia.

*   Fonte Primária (Títulos): [Poppins](https://fonts.google.com/specimen/Poppins)
    

*   Exemplo:
    

*   # Título Principal (Poppins Bold)
    
*   ## Subtítulo (Poppins Medium)
    

*   Justificativa: Poppins é uma fonte geométrica sans-serif com uma aparência moderna, amigável e energética. Seus caracteres arredondados a tornam convidativa, enquanto suas diversas espessuras (weights) permitem criar um forte contraste entre os títulos. É perfeita para passar uma mensagem de motivação e clareza nas áreas de destaque do aplicativo.
    

*   Fonte Secundária (Textos de apoio): [Lato](https://fonts.google.com/specimen/Lato)
    

*   Exemplo:
    

*   Este é um parágrafo de exemplo para descrições de exercícios, instruções e outras informações no aplicativo. A fonte Lato foi escolhida por sua alta legibilidade.
    

*   Justificativa: Lato foi desenhada para ser transparente e neutra, mas com um toque de calor em seus detalhes. Ela oferece excelente legibilidade em tamanhos pequenos, o que é crucial para descrições de exercícios, contadores de tempo e outras informações detalhadas. Sua combinação com Poppins cria um par equilibrado: Poppins chama a atenção e Lato entrega a informação de forma clara e eficiente.
    
*   ## 3\. Estudo de Guidelines – Figma Community
    
    *   Guideline/Princípio Escolhido: Design Baseado em Componentes (Component-Based Design)
        
    
    O Figma Community, embora não seja um guideline formal como o Material Design, é uma plataforma onde a prática do Design Baseado em Componentes é fundamental e amplamente disseminada. Este princípio consiste em construir interfaces a partir de pequenos elementos reutilizáveis, chamados de "componentes". A ideia, popularizada pelo conceito de Atomic Design, é começar com os "átomos" (ícones, cores, inputs de texto) que são combinados para formar "moléculas" (um campo de busca com um botão) e, por sua vez, "organismos" (o cabeçalho completo de uma página).
    
    A principal vantagem dessa abordagem é a consistência e a escalabilidade. Ao criar um componente mestre em Figma, como um botão, todas as suas cópias (instâncias) espalhadas pelo design herdam suas propriedades. Se o designer decidir alterar a cor ou a fonte de todos os botões do aplicativo, basta editar o componente mestre, e a mudança é aplicada instantaneamente em todos os lugares. Isso economiza um tempo imenso, reduz erros e garante que a identidade visual se mantenha coesa em todas as telas. Além disso, facilita a colaboração entre designers e desenvolvedores, pois o sistema de componentes serve como uma "fonte única da verdade" (single source of truth) para a aparência e o comportamento de cada elemento da interface.
    
    Aplicação no aplicativo de academia:
    
    Este princípio seria aplicado na criação de uma biblioteca de componentes reutilizáveis para o app. Por exemplo, poderíamos criar um componente chamado WorkoutCard. Este card seria um "organismo" composto por átomos e moléculas: um átomo de Imagem, um átomo de Ícone (para indicar o tipo de treino), uma molécula de Texto (com o título em Poppins e a descrição em Lato) e uma molécula de Botão ("Iniciar Treino"). Poderíamos criar variantes desse componente para diferentes estados, como "Concluído", "Em andamento" ou "Bloqueado". Ao usar este componente em todas as listagens de treino, garantimos que todos os cards tenham a mesma estrutura e aparência. Se, no futuro, decidirmos adicionar o tempo estimado de treino a todos os cards, bastaria editar o componente mestre WorkoutCard uma única vez.
