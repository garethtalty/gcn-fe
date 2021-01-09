import Category from './pages/category';
import Presenters from './pages/presenters';
import Home from './pages/home';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/category/gcn-show', name: 'GCN Show', Component: Category },
  { path: '/category/how-to', name: 'How to', Component: Category },
  { path: '/category/maintenance-mondays', name: 'Maintenance', Component: Category },
  { path: '/category/ask-gcn', name: 'Ask GCN', Component: Category },
  { path: '/category/train-with-gcn', name: 'Training', Component: Category },
  { path: '/category/features', name: 'Features', Component: Category },
  { path: '/category/top-10s', name: 'Top 10s', Component: Category },
  { path: '/category/gcn-racing', name: 'GCN Racing', Component: Category },
  { path: '/category/gcn-tech', name: 'GCN Tech', Component: Category },
  { path: '/presenters', name: 'Presenter', Component: Presenters },
  { path: '/presenters/conor-dunne', name: 'Conor Dunne', Component: Presenters },
  { path: '/presenters/daniel-lloyd', name: 'Daniel Lloyd', Component: Presenters },
  { path: '/presenters/james-lw', name: 'James Lowsley-Williams', Component: Presenters },
  { path: '/presenters/jon-cannings', name: 'Jon Cannings', Component: Presenters },
  { path: '/presenters/manon-lloyd', name: 'Manon Lloyd', Component: Presenters },
  { path: '/presenters/oliver-bridgewood', name: 'Oliver Bridgewood', Component: Presenters },
  { path: '/presenters/simon-richardson', name: 'Simon Richardson', Component: Presenters },
  { path: '/presenters/tom-last', name: 'Tom Last', Component: Presenters },
];

export default routes;
