# Codemod: Transform `pcln-icons/lib` import statements

Example usage:

```shell
# Prereq: Install jscodeshift
npm i -g jscodeshift

# Run transform on all files in source
jscodeshift -t path/to/iconsV2toV3.js src/**
```

This transform handles the following cases:

```JavaScript
import Dollar from 'pcln-icons/lib/Dollar'
import Dollar from "pcln-icons/lib/Dollar";
import DollarIcon from 'pcln-icons/lib/Dollar'
```

If a file contains multiple imports from `pcln-icons/lib`, it will combine them as so:

```JavaScript
// Before
import Dollar from "pcln-icons/lib/Dollar"
import Car from "pcln-icons/lib/Car"

// After
import { Dollar, Car } from "pcln-icons"
```

It also handles named default imports:

```JavaScript
// Before
import Dollar as DollarIcon from "pcln-icons/lib/Dollar"

// After
import { Dollar as DollarIcon } from "pcln-icons"
```
