import { User } from '@entities/user/user';
import { UserDTO } from '@entities/user/user.dto';

export const userMapper = (userDTO: UserDTO): User => {
  return {
    id: userDTO.id,
    name: userDTO.name,
    role: userDTO.role,
  };
};

export const userMapperArray = (userDTOs: UserDTO[]): User[] => {
  return userDTOs.map(userMapper);
};
