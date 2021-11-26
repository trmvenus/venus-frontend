import { useCallback, useEffect, useState } from 'react';
import * as utils from '../blockchain/utils';

const useVenusData = () => {
  const [venusData, setVenusData] = useState<any>(null);

  const fetchVenusData = useCallback(async () => {
    try {
      const data = await utils.getVenusInfo();
      setVenusData(data);
      if ((window as any).debugMode)
        console.log("Venus Data:", data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchVenusData();
    let refreshInterval = setInterval(fetchVenusData, 10000);
    return () => clearInterval(refreshInterval);
  }, [fetchVenusData]);

  return venusData;
}

export default useVenusData;
