# Product Growth Hero - Animated Tile Component

A production-ready React component extracting the core "Growth Engine" visualization from high-fidelity landing page concepts. This standalone component renders a 600x600 interactive tile featuring a central glass-morphism hub, orbiting elements, and floating metric cards with entrance animations.

## Tech Stack
- **React 18+**
- **TypeScript**
- **Tailwind CSS** (for all styling, utilizing arbitrary values for precision)
- **Framer Motion** (for complex orchestration of orbits, floats, and entrance effects)
- **Lucide React** (for consistent vector iconography)

## Usage

1. **Import the component**:
   ```tsx
   import ProductPhaseTile from './components/ProductPhaseTile';
   ```

2. **Place it in your layout**:
   The component is rigidly sized to `600px x 600px` by default to ensure design fidelity. It handles its own internal scaling.
   ```tsx
   <div className="flex justify-center items-center min-h-screen">
     <ProductPhaseTile />
   </div>
   ```

3. **Customization**:
   The component is self-contained. To modify colors or metrics, edit the `ProductPhaseTile.tsx` file directly. It uses Tailwind arbitrary values (e.g., `bg-[#3b7ced]`) to maintain isolation without requiring a global `tailwind.config.js`.

## Features
- **Isolated Styling**: No external CSS files required.
- **Performance**: Animations run on the compositor thread where possible using Framer Motion.
- **Responsive Internals**: The content scales internally to fit the container while preserving the 700px+ visual spread of the original design.
