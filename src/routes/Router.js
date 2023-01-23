import { Route, Routes, Navigate } from 'react-router-dom';
import OutletMenu from '../layout/OutletMenu';
import SideMenu from '../layout/OutletMenu';
import AllComponents from '../page/AllComponents';
import ButtonTest from '../page/ButtonTest';
import Palette from '../page/Palette';
import TextFieldTest from '../page/TextFieldTest';
import TypographyEng from '../page/TypographyEng';
import TypographyTH from '../page/TypographyTH';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<OutletMenu />}>
        <Route path='palette' element={<Palette />} />
        <Route path='typography-en' element={<TypographyEng />} />
        <Route path='typography-th' element={<TypographyTH />} />
        <Route path='button' element={<ButtonTest />} />
        <Route path='textField' element={<TextFieldTest />} />
        <Route path='*' element={<AllComponents />} />
      </Route>
      <Route path='*' element={<Palette />} />
    </Routes>
  );
}
