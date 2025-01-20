import FormInput from '../../utils/FormInput';
import TotalPriceCell from '../../components/Cart/TotalPriceCell';
import CartProducts from '../../components/Cart/CartProducts';

const Checkout = () => {
  return (
    <main className='bg-stone-200 h-[calc(100dvh-5rem)]'>
      <p className='text-center text-2xl font-bold text-slate-950 pt-14'>
        Finalizar Compra
      </p>
      <form className='grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-6 h-3/4 mt-20 px-8 max-w-[1200px] mx-auto'>
        <p className='text-center text-sm font-semibold text-slate-950'>
          Seus Dados
        </p>
        <FormInput
          fieldType='text'
          fieldName='Nome'
          id='name'
          placeholder='John'
          required
        />
        <FormInput
          fieldType='text'
          fieldName='Sobrenome'
          id='surname'
          placeholder='Lira'
          required
        />
        <FormInput
          fieldType='email'
          fieldName='Email'
          id='email'
          placeholder='johnlira@hashtag.com'
          required
        />
        <FormInput
          fieldType='number'
          fieldName='Telefone'
          id='phone'
          placeholder='(xx) 99999-9999'
          required
        />
        <p className='text-center text-sm font-semibold text-slate-950 row-start-1'>
          Pagamento e Entrega
        </p>
        <FormInput
          fieldType='number'
          fieldName='Número do Cartão'
          id='credit-card'
          placeholder='9999 9999 8888 7777'
          required
        />
        <div className='flex justify-center gap-3'>
          <FormInput
            fieldType='number'
            fieldName='CVV'
            id='cvv'
            placeholder='123'
            className='w-1/2'
            maxLength='3' // Isso deve funcionar no tipo texto
            inputMode='numeric' // Para indicar que o campo aceita apenas números
            required
          />

          <FormInput
            fieldType='number'
            fieldName='Data de vencimento'
            id='expiration-date'
            placeholder='01/70'
            className='w-1/2'
            required
          />
        </div>
        <FormInput
          fieldType='number'
          fieldName='CEP'
          id='postal-code'
          placeholder='33333-999'
          required
        />
        <FormInput
          fieldType='text'
          fieldName='Endereço'
          id='address'
          placeholder='Rua que sobe e desce'
          required
        />

        <p className='text-center text-sm font-semibold text-slate-950 row-start-1 mb-4'>
          Seus Produtos
        </p>
        <section className='row-span-3 bg-neutral-100 rounded-md overflow-auto'>
          <CartProducts isHomePage={false} />
        </section>
        <section className='row-span-1 flex flex-col gap-2'>
          <TotalPriceCell />
          <button className='font-medium bg-slate-950 text-slate-100 rounded-sm p-2 border border-transparent hover:bg-white hover:border hover:border-slate-950 hover:text-black text-center mb-10 transition duration-200'>
            Finalizar Compra
          </button>
        </section>
      </form>
    </main>
  );
};

export default Checkout;
