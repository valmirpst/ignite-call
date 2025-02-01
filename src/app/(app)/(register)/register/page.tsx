import { Suspense } from 'react';
import FormContent from './components/form-content/form-content';
import FormHeader from './components/form-header';

export default function Register() {
  return (
    <section className="max-w-[572px] pt-16 xl:pt-24 mx-auto mb-4">
      <FormHeader />

      <Suspense>
        <FormContent />
      </Suspense>
    </section>
  );
}
