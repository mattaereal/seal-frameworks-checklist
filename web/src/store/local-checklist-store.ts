import { $, useStore, useContext } from '@builder.io/qwik';
import type { Sections } from '~/types/PSC';
import { ChecklistContext } from '~/store/checklist-context';

export const useChecklist = () => {
  // Get the data that was already loaded by the route loader
  const contextChecklist = useContext(ChecklistContext);
  
  // Initialize with the context data
  const state = useStore<{ checklist: Sections | null }>({ 
    checklist: contextChecklist.value 
  });

  const setChecklist = $((newChecklist: Sections) => {
    state.checklist = newChecklist;
  });

  return { checklist: state, setChecklist };
};
