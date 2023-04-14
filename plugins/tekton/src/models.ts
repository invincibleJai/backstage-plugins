import { GroupVersionKind } from './types/types';

export const PipelineRunGVK: GroupVersionKind = {
  apiVersion: 'v1beta1',
  apiGroup: 'tekton.dev',
  kind: 'PipelineRun',
};

export const TaskRunGVK: GroupVersionKind = {
  apiVersion: 'v1beta1',
  apiGroup: 'tekton.dev',
  kind: 'TaskRun',
};

export enum ModelsPlural {
  pipelineruns = 'pipelineruns',
  taskruns = 'taskruns',
}

export const tektonResourceModels: { [key: string]: GroupVersionKind } = {
  [ModelsPlural.pipelineruns]: PipelineRunGVK,
  [ModelsPlural.taskruns]: TaskRunGVK,
};
