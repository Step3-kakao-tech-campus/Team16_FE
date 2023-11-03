/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react';

export interface SearchedPlaceType {
  address_name: string;
  distance: string;
  id: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
  isRegistered?: boolean;
}

const searchPlace = (map: any, keyword: string, setSearchedPlace: any) => {};

export default searchPlace;
