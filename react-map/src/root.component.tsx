import './root.component.css';

export default function Root(props) {
  return (
  <section className="wrapper">
    <h1>React Map</h1>
    <div>{props.name} is mounted!</div>
    </section>
  );
}
