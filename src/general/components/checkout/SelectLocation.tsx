import axios from 'axios';
import { useField } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { setLocations } from '../../../features/shop/shopSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { base_url } from '../../../utils/utils';

const Wrapper = styled.div`
  option.initial {
    color: #6c757d;
  }
`;

function SelectLocation(props: any): JSX.Element {
  const [data, setData] = useState<any>([]);
  const token = useAppSelector((state) => state.auth.token);
  const field = useField(props.name);
  const dispatch = useAppDispatch();

  const getLocations = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `${base_url}/users/addresses/delivery-locations`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (res?.data?.status === 'success') {
        dispatch(setLocations(res.data.data));
        setData(res.data.data);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLocations();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="custom_select">
      <select {...field} className="form-control" name={props.name}>
        <option className="initial" value="">
          Select your location...
        </option>
        {data?.map((item: any, index: number) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

export default SelectLocation;
