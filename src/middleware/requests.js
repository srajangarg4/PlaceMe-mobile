import { PendingRequestService, CompletedRequestService } from 'placeme-services/lib';

const pendingRequestService = new PendingRequestService();
const completedRequestService = new CompletedRequestService();

export const getAllPendingRequests = async () => pendingRequestService
  .getCurrentUserPendingRequests();

export const getAllCompletedRequests = async () => completedRequestService
  .getCurrentUserCompletedRequests();

export const updatePersonalDetails = async ({ title, data, comment }) => pendingRequestService
  .add({ updatesRequired: data, title, type: 'PERSONAL', comment });

export const updateAcademicDetails = async ({ title, data, comment }) => pendingRequestService
  .add({ updatesRequired: data, title, type: 'ACADEMICS', comment });

export const uploadNewDocument = async ({
  title, doc, comment }) => pendingRequestService
  .add({
    title,
    type: 'DOCUMENT',
    updatesRequired: {
      doc, title, type: 'SECONDARY',
    },
    comment });
