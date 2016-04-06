React MDL. Layout reconcile issue
=================================

Use case
---------

`Layout` component has two children: `Header` and `div.footer`.
Initially `div.footer` is visible and rendered as direct child of `Layout` component. Then, when state `isFooterVisible` changes, `div.footer` will not be rendered at all during next cycle.

```
renderFooter(){
  if (!this.state.isFooterVisible) return null;

  return (
    <div className="Layout-footer">
      <Button onClick={this.toggleFooter}>Hide Footer</Button>
    </div>
  );
}

render(){
  return (
    <Layout fixedHeader>
      {this.renderHeader()}
      {this.renderFooter()}
    </Layout>
  );
}
```

Issue
----------
Given that, when `isFooterVisible` becomes `false`, React fails at reconcile with following error.

```
Uncaught Invariant Violation: processUpdates(): Unable to find child 1 of element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `.0`
```

Repro steps
------------
1. Clone repository
2. `npm i`
3. `npm start`
4. Click `Hide Footer` button, and see developer console for error.

See `src/app.js` file for the implementation.

I'm using patched version of `material.css` and `material.js` as mentioned in [React-MDL requirements](https://github.com/tleunen/react-mdl#requirements).
