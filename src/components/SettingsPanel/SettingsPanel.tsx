import React from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import SelectUI from '../SelectUI/SelectUI';
import type { QueryType } from '../../services/types';
import { artifacts, stations } from '../SelectUI/values';

interface SettingsPanelProps {
  queryParams: QueryType;
  getData: () => void;
  setQueryParams: React.Dispatch<React.SetStateAction<QueryType>>;
}

const SettingsPanel = (props: SettingsPanelProps) => {
  const { queryParams, getData, setQueryParams } = props;

  return (
    <div className='form-wrap'>
      <SelectUI
        name='Station'
        value={queryParams.station}
        onChange={(e: SelectChangeEvent) =>
          getQuery(e, 'station', setQueryParams)
        }
        options={stations}
      />
      <SelectUI
        name='Artifact'
        value={queryParams.artifact}
        onChange={(e: SelectChangeEvent) =>
          getQuery(e, 'artifact', setQueryParams)
        }
        options={artifacts}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={queryParams.historic}
            onChange={(e) => getQuery(e, 'historic', setQueryParams)}
          />
        }
        label='Previus prices'
      />

      <Button variant='outlined' onClick={getData}>
        Search
      </Button>
    </div>
  );
};

export default SettingsPanel;

const getQuery = (
  e: SelectChangeEvent,
  name: string,
  setValue: React.Dispatch<React.SetStateAction<QueryType>>
) => {
  if (name === 'historic') {
    setValue((prev) => ({
      ...prev,
      historic: !prev.historic,
    }));
    return;
  }

  setValue((prev) => ({
    ...prev,
    [name]: e.target.value as string,
  }));
};
