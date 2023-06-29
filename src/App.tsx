import Table from './components/Table';
import useRequest from './hooks/useRequest';
import { Column, DataSource } from './models/table';
import { getProducts } from './services/products/products';

const columns: Column[] = [
  { dataKey: 'title', label: 'Product' },
  { dataKey: 'description', label: 'Description' },
  { dataKey: 'price', label: 'Price' },
  { dataKey: 'rating', label: 'Rating' },
];

function App() {
  const { data, error, isFetching } = useRequest(getProducts);

  return (
    <div className="App" role="main">
      {isFetching ? (
        <h1>Retrieving data...</h1>
      ) : (
        <Table
          columns={columns}
          data={data?.products as unknown as DataSource[]}
        />
      )}
    </div>
  );
}

export default App;
