import {
  Accordion,
  AccordionSummary,
  SvgIcon,
  AccordionDetails,
  Box,
  styled,
  Divider,
} from '@mui/material';
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down-icon.svg';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setTodosExpanded } from '@/app/store/slices/todoSlice';
import BottomBar from '@/components/BottomBar';

const StyledAccordionSummary = styled(AccordionSummary)({
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0,
  },
  flexDirection: 'row-reverse',
});

export default function TodoAccordion() {
  const dispatch = useAppDispatch();
  const { expanded } = useAppSelector((store) => store.todo);

  const toggleAcordion = (): void => {
    dispatch(setTodosExpanded(!expanded));
  };

  return (
    <Accordion expanded={expanded}>
      <StyledAccordionSummary
        expandIcon={
          <SvgIcon fontSize="small" inheritViewBox color="secondary" onClick={toggleAcordion}>
            <ArrowDownIcon />
          </SvgIcon>
        }
        aria-controls="panel1a-content"
      >
        <TodoInput />
      </StyledAccordionSummary>
      <Divider />
      <AccordionDetails sx={{ p: 0 }}>
        <Box sx={{ minHeight: '170px', boxShadow: 2 }}>
          <TodoList />
        </Box>
        <BottomBar />
      </AccordionDetails>
    </Accordion>
  );
}
