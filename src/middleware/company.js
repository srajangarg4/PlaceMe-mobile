import { CompanyService } from 'placeme-services/lib';

const service = new CompanyService();

export const fetchCompany = (id) => service.get(id);

export const fetchAllCompany = () => service.getAll();
