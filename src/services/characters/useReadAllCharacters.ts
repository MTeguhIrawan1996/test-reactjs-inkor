import { useQuery } from '@tanstack/react-query';

import { instance as axios } from '../axios-client';

import { GResponse } from '@/types/global';

export type ICharacterResponse = {
  id: string;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
};

export const characterKeys = {
  readAll: () => ['character'],
};

export const readAllCharacters = async () => {
  try {
    const response =
      await axios.get<GResponse<ICharacterResponse>>('/character');
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const useReadAllCharacters = () => {
  return useQuery<GResponse<ICharacterResponse>>({
    queryKey: characterKeys.readAll(),
    queryFn: readAllCharacters,
  });
};
