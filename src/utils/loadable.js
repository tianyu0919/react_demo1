import Loadable from 'react-loadable';
import Loading from "@components/Loading";

const loader = (component) => Loadable({
  loader: component,
  loading: Loading
});

export default loader;