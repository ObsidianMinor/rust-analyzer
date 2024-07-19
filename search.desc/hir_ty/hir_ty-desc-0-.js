searchState.loadedDescShard("hir_ty", 0, "The type system. We currently use this to infer types for …\nRepresents coercing a value to a different type of value.\nAbstract data types, i.e., structs, unions, or …\nThe id for an Abstract Data Type (i.e. structs, unions and …\nAn “alias” type represents some form of type alias, …\nType is equal to an alias.\nList of goals that all should hold.\nThe goal may be provable in multiple ways, but regardless …\nan array type like <code>[T; N]</code>\nGo from <code>*const [T; N]</code> to <code>*const T</code>\nan associated type like <code>Iterator::Item</code>; see <code>AssociatedType</code> …\nRepresents generic parameters and an item bound by them. …\nBinding modes inferred for patterns. …\nTake the address and produce either a <code>&amp;</code> or <code>*</code> pointer.\nIdentifies a particular bound variable within a binder. …\nReferences the binding at the given depth. The index is a […\nSee TyKind::BoundVar.\nBound var (e.g. a parameter).\nThe “break type” of the visitor, often <code>()</code>. It …\nA function signature as seen by type inference: Several …\nIndicates something that cannot be proven to be true or …\nThe <code>Cast</code> trait is used to make annoying upcasts between …\nA closure.\nGo from a non-capturing closure to an fn pointer or an …\nUsed to activate the “compatible modality” rules. …\nConcrete constant value.\nConstant argument\nA concrete constant value\nA coroutine.\nA coroutine witness.\nReferences the binder at the given depth. The index is a de\nThe existential variables <em>must</em> have the given values if …\nDereference once, producing a place.\n<code>impl Trait</code> is disallowed and will be an error.\nA “domain goal” indicates some base sort of goal that …\nUsed to indicate that a given type is in a downstream …\nA “dyn” type is a trait object type created via the “…\nMake two things equal; the rules for doing so are well …\nAn erased lifetime, used by rustc to improve caching when …\nThis can be used to represent an error, e.g. during name …\nA lifetime that resulted from some error\na function definition\nA wrapper for the substs on a Fn.\nforeign types\nTrue if the trait ref can be derived from in-scope where …\nA function type such as <code>for&lt;&#39;a&gt; fn(&amp;&#39;a u32)</code>. Note that “…\nSimple goal that is true if the where clause is true.\nInnermost index.\nType implements a trait.\nA goal that holds given some clauses (like an …\nThe result of type inference: A mapping from expressions …\nInference variable defined in the current inference …\nLifetime whose value is being inferred.\nConstant whose value is being inferred.\nTrue if a type and its input types are fully visible, …\nTrue if a type is considered to have been “defined” by …\nTrue if a type is <em>not</em> considered to have been “defined”…\nLifetime argument\nOutlives constraint <code>&#39;a: &#39;b</code>, indicating that the value of <code>&#39;a</code>…\nOne lifetime outlives another.\nUsed to dictate when trait impls are allowed in the …\nA constant can have reference to other things. Memory map …\nMutable\nGo from a mut raw pointer to a const raw pointer.\nWhether a type is mutable or not.\nthe never type <code>!</code>\nGo from ! to any type.\nTrue if the alias type can be normalized to some other type\nImmutable\nNegation: the inner goal should not hold.\nOne level higher than the innermost index.\nUsed to indicate that a trait is object safe.\nAn opaque type.\n<code>impl Trait</code> gets lowered into an opaque type that doesn’t …\na placeholder for opaque types like <code>impl Trait</code>\nAn overloaded autoderef step, representing a …\n<code>impl Trait</code> gets lowered into a type variable. Used for …\nLifetime on phantom data.\ninstantiated from a universally quantified type, e.g., from\nLifetime on some yet-unknown placeholder.\nLifetime on some yet-unknown placeholder.\nA polymorphic function signature.\nAn associated type projection.\nIntroduces a binding at depth 0, shifting other bindings up\na raw pointer type like <code>*const T</code> or <code>*mut T</code>\nConverts from T to *T.\na reference type like <code>&amp;T</code> or <code>&amp;mut T</code>\nConverts from T to &amp;T.\nGo from a fn-item type to a fn-pointer type.\nUsed to activate the “reveal mode”, in which opaque (…\nSafe\nWhether a function is safe or not.\nTypes of scalar values.\na scalar type like <code>bool</code> or <code>u32</code>\na slice type like <code>[T]</code>\nStatic lifetime\nthe string primitive type\nInterned list of generic arguments for an item. When an …\nMake one thing a subtype of another; the rules for doing …\nThere are multiple plausible values for the existentials, …\na tuple of the given arity\nType argument\nThis is a builder for <code>Ty</code> or anything that needs a …\nRepresents some extra knowledge we may have about the type …\nType outlives constraint <code>T: &#39;a</code>, indicating that the type <code>T</code> …\nType outlives a lifetime.\nFor types where “visit” invokes a callback on the …\nApplies the given <code>visitor</code> to a value, producing a visited …\nA “visitor” recursively folds some term – that is, …\nThe goal indeed holds, and there is a unique value for all …\nThere’s no useful information to feed back to type …\nCase of an unknown value that rustc might know but we don…\nUnsafe\nGo from a safe fn pointer to an unsafe fn pointer.\nUnsize a pointer/reference value, e.g., <code>&amp;[T; n]</code> to <code>&amp;[T]</code>. …\n<code>impl Trait</code> gets lowered into a variable that can unify …\nTrue if the type or trait ref is well-formed.\nReturns an iterator over the whole super trait hierarchy …\nCreates a <code>dyn</code> value from this visitor. Unfortunately, this …\nThe id for the associated type member.\nIn certain situations, rust automatically inserts derefs …\nThe binders that quantify over the value.\nThe binders that quantify over the value.\nThe kind/universe of the variable.\nThe binders that quantify over the value.\nStores the binding mode (<code>ref</code> in <code>let ref x = 2</code>) of bindings.\nTrue if this variable is bound within the <code>amount</code> innermost …\nThe unknown self type.\nCast a value to type <code>U</code> using <code>CastTo</code>.\nThe clauses in the environment.\nReturns unique placeholders for types and consts contained …\nConstant evaluation details\nRegion constraints that constrain the substitution.\nCheck if types unify.\nCheck if types unify eagerly making sure there are no …\nThe home of <code>HirDatabase</code>, which is the Salsa database …\nDebruijn index, which identifies the binder.\nDepth of the De Bruijn index, counting from 0 starting with\nType inference-based diagnostics.\nThe <code>HirDisplay</code> trait, which serves two purposes: Turning …\nIf this is a <code>dyn Trait</code>, returns that trait.\nFIXME: Get rid of this, it’s not a good abstraction\nType flags\nIf overridden to return true, we will panic when a free …\nIf overridden to return true, then visiting will panic if a\nIf overridden to return true, inference variables will …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIndex <em>in</em> the universe.\nIndex within the binder.\nReturn the index of the bound variable, but only if it is …\nReturn the index of the bound variable, but only if it is …\nThe interned constant.\nGets the visitor’s interner.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe associated variable kind.\nThe kind\nFunctions to detect special lang items\nCompute the binary representation of a type\nLifetime of the <code>DynTy</code>.\nThis module is concerned with finding methods that a given …\nMIR definitions and implementation\nCreates a new bound variable.\nCreates a new de Bruijn index with a given depth.\nThe id for the opaque type.\nReturn an index of a parameter in the generic type …\nStores the types which were implicitly dereferenced in …\nA few helper functions for dealing with primitives.\n‘Canonicalizes’ the <code>t</code> by replacing any errors with new …\nUpdate this index in place by shifting it “in” through …\nUpdate in place by shifting out from <code>amount</code> binders.\nAdjusts the debruijn index (see <code>DebruijnIndex::shifted_in</code>).\nReturns the resulting index when this value is moved into …\nAdjusts the debruijn index (see <code>DebruijnIndex::shifted_in</code>).\nAdds <code>outer_binder</code> levels to the <code>self</code> index. Intuitively, …\nAdjusts the debruijn index (see <code>DebruijnIndex::shifted_in</code>).\nReturns the resulting index when this value is moved out …\nAdjusts the debruijn index (see <code>DebruijnIndex::shifted_in</code>).\nSubtracts <code>outer_binder</code> levels from the <code>self</code> index. …\nThe substitution that is being constrained.\nCreates a <code>TyBuilder</code> to build <code>Substitution</code> for a coroutine …\nThe substitution for the projection.\nThe substitution for the opaque type.\nThe substitution, containing both the <code>Self</code> type and the …\nRecursively visits the type contents.\nWraps the bound variable in a constant.\nWrap the bound variable in a lifetime.\nCasts the bound variable to a type.\nThe trait id.\nTrait solving using Chalk.\nWhenever a tuple field expression access a tuple field, we …\nType that holds the constant.\nType of the result of <code>.into_iter()</code> on the for. <code>ExprId</code> is …\nFor each pattern record the type it resolves to.\nNote: Conceptually, it’s thinkable that we could be in a …\nIndex <em>of</em> the universe.\nThe value of the constant.\nThe item that is canonicalized.\nTop-level callback: invoked for each <code>Const&lt;I&gt;</code> that is …\nInvoked for each domain goal.\nInvoked for each occurrence of a placeholder type; these …\nInvoked for <code>BoundVar</code> instances that are not bound within …\nInvoked for every goal. By default, recursively visits the …\nInvoked for each occurrence of a inference type; these are …\nTop-level callback: invoked for each <code>Lifetime&lt;I&gt;</code> that is …\nInvoked for every program clause. By default, recursively …\nTop-level callback: invoked for each <code>Ty&lt;I&gt;</code> that is …\nInvoked for each where clause.\nApply the given visitor <code>visitor</code> to <code>self</code>; <code>binders</code> is the …\nTrue if the binder identified by this index is within the …\nContains the type the field resolves to\nReturns types that <code>ty</code> transitively dereferences to. This …\nExtension trait for <code>Const</code>\nReturns the argument unchanged.\nInterns a constant scalar with the given type\nInterns a constant scalar with the given type\nCalls <code>U::from(self)</code>.\nIs a <code>Const</code> unknown?\nInterns a possibly-unknown target usize\nRepresentative struct for the query group.\nThis exists just for Chalk, because Chalk just has a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nCollects all crates in the dependency graph that have …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the type of the value of the given constant, or …\n<code>some_var</code>\n<code>SomeStruct</code>\n<code>SOME_CONST</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>{closure#14825}</code>, useful for some diagnostics (like type …\n<code>{closure#14825}&lt;i32, ()&gt;</code>, useful for internal usage.\nDisplay types for inlays, doc popups, autocompletion, etc…\nErrors that can occur when generating source code\n<code>FmtError</code> is required to be compatible with …\n<code>…</code>, which is the <code>TYPE_HINT_TRUNCATION</code>\n<code>impl FnX(i32, i32) -&gt; i32</code>, where <code>FnX</code> is the most special …\n<code>|i32, i32| -&gt; i32</code>\nDisplay types for inserting them in source files. The …\nOnly for test purpose to keep real types\nThe database handle\nReturns a <code>Display</code>able type that is human-readable. Use …\nReturns a <code>Display</code>able type that is human-readable and …\nReturns a String representation of <code>self</code> that can be …\nReturns a String representation of <code>self</code> for test purposes\nReturns a <code>Display</code>able type that is human-readable and …\nReturns a String representation of <code>self</code> that shows the …\nWhen rendering something that has a concept of “children…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a <code>Display</code>able type that is human-readable.\nThis allows using the <code>write!</code> macro directly with a …\nThe tag directly stores the discriminant, but possibly …\nEnum-likes with more than one inhabited variant: each …\nNiche (values invalid for a type) encoding the …\nSingle enum variants, structs/tuples, unions, and all …\nThe <code>abi</code> defines how this data is passed between functions, …\nSays where the fields are located within the layout.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe leaf scalar with the largest number of invalid values …\nThe largest alignment explicitly requested with <code>repr(align)</code>…\nThe alignment the type would have, ignoring any <code>repr(align)</code>…\nEncodes information about multi-variant layouts. Even with …\nFilter for results that are visible from the given module\nInclude impls from the given block.\nInherent impls defined in some crate.\nWhether we’re looking up a dotted method call (like …\nLooking up a method call like <code>v.len()</code>: We only consider …\nDo nothing special in regards visibility\nLooking up a path like <code>Vec::new</code> or <code>Vec::default</code>: We …\nTrait impls defined or available in some crate.\nThis is used as a key for indexing impls.\nChecks whether the impl satisfies the orphan rules.\nCreates a TyFingerprint for looking up an inherent impl. …\nQueries all trait impls for the given type.\nQueries all impls of the given trait.\nQueries all impls of <code>trait_</code> that may apply to <code>self_ty</code>.\nCreates a TyFingerprint for looking up a trait impl.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nQueries whether <code>self_ty</code> has potentially applicable …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nChecks if the self parameter of <code>Trait</code> method is the …\nIndicates that the landing pad is finished and that the …\nThe <code>+</code> operator (addition)\nCreates an aggregate value, like a tuple or struct.\nThe type is of the element\nEvaluates the operand, which must have type <code>bool</code>. If it is …\nThe <code>&amp;</code> operator (bitwise and)\nThe <code>|</code> operator (bitwise or)\nThe <code>^</code> operator (bitwise xor)\nRoughly speaking, evaluates the <code>func</code> operand and the …\nPerforms essentially all of the casts that can be …\nSame as <code>BinaryOp</code>, but yields <code>(T, bool)</code> with a <code>bool</code> …\nData must be immutable but not aliasable. This kind of …\n?\nConstants are already semantically values, and remain …\nCreates a value by loading the given place.\nA CopyForDeref is equivalent to a read from a place at the …\nIndicates the end of dropping a coroutine.\nComputes the discriminant of the place, returning it as an …\nThe <code>/</code> operator (division)\nThe behavior of this statement differs significantly …\nDrops the place and assigns a new value to it.\nCast into a dyn* object.\nThe <code>==</code> operator (equality)\nA block where control flow only ever takes one real path, …\nA terminator for blocks that only take one path in …\nThe <code>&gt;=</code> operator (greater than or equal to)\nBlock has one successor; we continue execution there.\nThe <code>&gt;</code> operator (greater than)\nSomething that should never happen and is definitely a …\nThese should not occur, usually indicates a bug in mir …\nFIXME: Fold this into InternalError\nThe <code>&lt;=</code> operator (less than or equal to)\nCreates a pointer/reference to the given thread local.\nThe <code>&lt;</code> operator (less than)\nCreates a value by performing loading the place, just like …\nThe <code>*</code> operator (multiplication)\nData is mutable and not aliasable.\nStores spans which implies that the local should be …\nThe <code>!=</code> operator (not equal to)\nThe <code>-</code> operator for negation\nThe <code>!</code> operator for logical inversion\nThe <code>ptr.offset</code> operator\nAn operand in MIR represents a “value” in Rust, the …\nAll sorts of pointer-to-pointer casts. Note that …\nAn exposing pointer to address cast. A cast between a …\nAn address-to-pointer cast that picks up an exposed …\nCreates a reference of the indicated kind to the place.\nThe <code>%</code> operator (modulus)\nCreates an array where each element is the value of the …\nReturns from the function.\nThe immediately borrowed place must be immutable, but …\nTransmutes a <code>*mut u8</code> into shallow-initialized <code>Box&lt;T&gt;</code>.\nNON STANDARD: allocates memory with the type’s layout, …\nData must be immutable and is aliasable.\nThe <code>&lt;&lt;</code> operator (shift left)\nThe <code>&gt;&gt;</code> operator (shift right)\nNON STANDARD: This kind of operand returns an immutable …\nThe <code>-</code> operator (subtraction)\nSwitches based on the computed value.\nTrying to lower a trait function, instead of an …\nThe type is of the tuple\nThis borrow arose from method-call auto-ref (i.e., …\nThis should never happen. Type mismatch should catch …\nComputes a value as described by the operation. Exactly …\nMeans that code had undefined behavior. We don’t try to …\nIndicates a terminator that can never be reached.\nIndicates that the landing pad is finished and that the …\nYields the operand unchanged\nMarks a suspend point.\nReturns a slice with all possible jump targets (including …\nThis field stores the closures directly owned by this …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf true, this block lies on an unwind path. This is used …\nReturns an iterator over the switch targets.\nCreates switch targets from an iterator of values and …\nReturns the fallback target that is jumped to when none of …\nList of statements in this block.\nBuilds a switch targets definition that jumps to <code>then</code> if …\nFinds the <code>BasicBlock</code> to which this <code>SwitchInt</code> will branch …\nTerminator for this block.\nArguments the function is called with. These are owned by …\nCleanups to be done if the call unwinds.\nWhere the returned value will be written\nThe discriminant value being tested.\nCleanup to be done if the coroutine is dropped at this …\n<code>true</code> if this is from a call in HIR rather than from an …\nThe function that’s being called.\nA block control flow could conceptually jump to, but won’…\nThe target normal control flow will take.\nThe target normal control flow will take.\nWhere to resume to.\nThe place to store the resume argument in.\nWhere to go after this call returns. If none, the call …\nThe imaginary cleanup block link. This particular path …\nThe value to return.\nDifferent signed int types.\nDifferent unsigned int types.\nDifferent kinds of float types.\nDifferent signed int types.\nDifferent unsigned int types.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA set of clauses that we assume to be true. E.g. if we are …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")