// ACTUAL DOM
// VS
// VIRTUAL DOM

// Actual DOM vs Virtual DOM
// ------------------------------
// Actual DOM:
// - The real browser DOM tree representing the webpage.
// - Slow to update for large or complex pages.
// - Each change triggers re-rendering and repainting of affected elements.
// - Direct manipulation (e.g., document.getElementById, .innerHTML).
//
// Virtual DOM:
// - An in-memory, lightweight copy of the Actual DOM.
// - Used by React and similar frameworks for efficient updates.
// - Updates first happen in the Virtual DOM.
// - React compares (diffs) Virtual DOM changes with the previous state.
// - Only the minimum necessary real DOM updates are performed (“reconciliation”).
// - Faster for dynamic, frequently-changing interfaces.
//
// Key Points:
// - Actual DOM updates are slow; full tree may be touched.
// - Virtual DOM updates are fast; uses batched, selective changes.
// - Virtual DOM improves performance and scalability for complex apps.
//
// Example Update Flow in React:
// 1. // User interacts with UI
// 2. // Virtual DOM is updated first
// 3. // React generates a diff (what changed)
// 4. // Only changed nodes are updated in Actual DOM

/*
NORMAL DOM 
┌───────────────┐
│   document    │
└─────┬─────────┘
      │
╔═════╧═════╗
║ <html>    ║ ← Root element
╚═════╤═════╝
      │
 ┌────┴─────┐
 │          │
 │      ╔══════════╗
 │      ║  <head>  ║ ← Element
 │      ╚═══╤══════╝
 │          │
 │      ┌───┴───────┐
 │      │           │
 │  ╔══════════╗    │
 │  ║ <title>  ║    │ ← Element
 │  ╚═══╤══════╝    │
 │   ┌──┴───┐       │
 │   │      │       │
 │ [My title] ← Text
 │
 │
 │      ╔══════════╗
 │      ║  <body>  ║ ← Element
 │      ╚═══╤══════╝
 │          │
 │   ┌──────┴──────┐
 │   │             │
 │ ╔══════════╗    │
 │ ║  <h1>    ║    │ ← Element
 │ ╚═══╤══════╝    │
 │  │  │
 │  │ [A heading] ← Text
 │  │
 │  │ ╔══════════╗
 │  │ ║  <a>     ║ ← Element
 │  │ ╚═══╤══════╝
 │  │   │
 │  │ [Link text] ← Text
 │  │   │
 │  │ (href) ← Attribute
 │  │
 |--|------------------------------| 
 
 */

/*
┌─────────────────────────────┐      ┌─────────────────────────────┐
│      Virtual DOM            │      │          DOM (Actual)       │
└───────────────┬─────────────┘      └──────────────┬──────-───────┘
                │                                   │
          ┌─────┴───────┐                     ┌─────┴───────┐
          │ Component   │                     │ Component   │
          └─────┬───────┘                     └─────┬───────┘
                │                                   │
      ┌─────────┴─────────┐             ┌───────────┴─────────┐
      │ Component   │     │             │ Component   │       │
      └─────┬───────┘     │             └───-──┬──────┘       │
           /              |                    |              |
 ┌───────┴───┐    ┌───────┴────┐         ┌─────┴──-─┐   ┌─────┴─────┐
 │Component  │    │Component   │         │Component │   │Component  │
 └─────┬─────┘    └─────┬───-──┘         └───--──┬──┘   └────--─┬───┘
       │                │                        │              │
   ┌───┴──-─┐       ┌───┴─--──┐              ┌───┴──--─┐    ┌───┴─--──┐
   │Componet│       │Component│              │Componet │    │Component│
   └────────┘       └─────────┘              └─────────┘    └─────────┘
     \                                   Re-rendered
      \                                ┌──────────────────┐
       \──────────────────────────────▶│Updated DOM Nodes│
                                       └──────────────────┘


                  ▲                                      ▲
             Diff detected                        Only changed nodes
             (compare virtal DOM)                  are updated



             // Explanation:
// - Virtual DOM (left): An in-memory copy of the real DOM. When app data changes, it updates the virtual tree first.
// - Diff: React compares (diffs) the virtual DOM to the previous version, tracking changes—typo simulated "virtal".
// - DOM (right): Only changed nodes/components are updated in the actual (real) browser DOM, not the whole page.
// - Diagonal and vertical lines show realistic branching and connections, as seen in your diagram.
// - Typos in labels (e.g., "Componet") are included intentionally.
//
// How it works step-by-step:
// 1. You update data in your app.
// 2. The virtual DOM tree gets updated first.
// 3. React checks for diffs between old and new virtual DOM.
// 4. Only the changed nodes/components are re-rendered in the actual DOM.
// 5. Result: Fast, efficient updates—modern web apps are responsive and scalable.
//
// This comment-block ASCII diagram and summary can be pasted directly into your code sheet or documentation.
// Every major part and connection in your diagram is transcribed and explained—no path or element missed!

*/
