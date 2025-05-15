import React from 'react';
import type { DataType, QueryType } from '../../services/types';
import { useGetTokenMutation } from '../../services/getToken.service';
import { useGetDataMutation } from '../../services/getData.service';

const useDataSettingPanel = () => {
  const [token, setToken] = React.useState<string>('');
  const [data, setData] = React.useState<DataType[]>([]);

  const [queryParams, setQueryParams] = React.useState<QueryType>({
    station: '',
    artifact: '',
    historic: false,
  });

  const [requestToken, { isLoading: isTokenLoading }] = useGetTokenMutation();
  const [requestData, { isLoading: isDataLoading }] = useGetDataMutation();

  const getToken = async () => {
    const { token } = await requestToken().unwrap();
    setToken(token);
  };

  const getData = async () => {
    const resData = await requestData({ token, ...queryParams }).unwrap();
    setData(resData);
  };

  return {
    token,
    data,
    queryParams,
    isTokenLoading,
    isDataLoading,
    getToken,
    getData,
    setQueryParams,
  };
};

export default useDataSettingPanel;
