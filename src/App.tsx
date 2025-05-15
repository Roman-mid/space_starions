import { Button } from '@mui/material';
import { Loader } from './components/Loader/Loader';
import TableUI from './components/TableUI/TableUI';
import useDataSettingPanel from './components/SettingsPanel/useDataSettingPanel';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import './App.css';

function App() {
  const {
    token,
    data,
    queryParams,
    isTokenLoading,
    isDataLoading,
    getToken,
    getData,
    setQueryParams,
  } = useDataSettingPanel();

  return (
    <>
      <h1>
        {!token
          ? 'To move forward you need to register'
          : 'Now you can use search panel'}
      </h1>

      {!token ? (
        <Button variant='outlined' className='btn' onClick={getToken}>
          Get token
        </Button>
      ) : (
        <SettingsPanel
          queryParams={queryParams}
          getData={getData}
          setQueryParams={setQueryParams}
        />
      )}

      {data.length > 0 && <TableUI data={data} />}
      {(isTokenLoading || isDataLoading) && <Loader />}
    </>
  );
}

export default App;
