# FormReactive
**En el modulo [Imports]:**
-  `ReactiveFormsModule`
   
Validación dinamica, mostar mensaje de error
https://github.com/ngneat/error-tailor
  
**Install**

- `npm i @ngneat/error-tailor@1.3.1`

**Import, en el model**

  ErrorTailorModule.forRoot({
  errors: {
  useValue: {
  required: 'This field is required',
  minlength: ({ requiredLength, actualLength }) =>
  `Expect ${requiredLength} but got ${actualLength}`,
  invalidAddress: error => `Address isn't valid`
  }
  }
  })
