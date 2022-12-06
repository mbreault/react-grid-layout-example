import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function MyComponent() {
    // Define the layout of the grid items
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];

    // Define the styles for the grid items
    const styles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        background: "#f0f0f0"
    };

    return (
        <ResponsiveReactGridLayout
            className="layout"
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
            <div key="a" style={styles}>A</div>
            <div key="b" style={styles}>B</div>
            <div key="c" style={styles}>C</div>
        </ResponsiveReactGridLayout>
    );
}

export default MyComponent;