import { formatProperties } from '../../utils/format';
import { Config } from '../../interfaces/config';

// =============================================================
// ======================= Test Tab Size =======================
// =============================================================

// Tab size 1
test('formatProperties tab size 1, 1 Depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 1,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        'display: flex;',
        '}'
    ];

    const expectedResult =
`
.asd {
 width: 100px;
 display: flex;
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('formatProperties tab size 1, 2 Depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 1,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        'height: 100px;',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
 width: 100px;
 .aaa {
  height: 100px;
 }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

// Tab size 2
test('formatProperties tab size 2, 1 Depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 2,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '}'
    ];

    const expectedResult =
`
.asd {
  width: 100px;
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('formatProperties tab size 2, 2 Depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 2,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        'height: 100px;',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
  width: 100px;
  .aaa {
    height: 100px;
  }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

// Tab size 3
test('formatProperties tab size 3, 1 Depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 3,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '}'
    ];

    const expectedResult =
`
.asd {
   width: 100px;
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('formatProperties tab size 3, 2 Depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 3,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        'height: 100px;',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
   width: 100px;
   .aaa {
      height: 100px;
   }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

// Tab size 4
test('formatProperties tab size 4, 1 Depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('formatProperties tab size 4, 2 Depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        'height: 100px;',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;
    .aaa {
        height: 100px;
    }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});



// =============================================================
// ================== Test Space Before Class ==================
// =============================================================

// Space Before Class True
test('formatProperties Space Before Class True, 1 depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '}',
        '.aaa {',
        'height: 100px;',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;
}

.aaa {
    height: 100px;
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('formatProperties Space Before Class True, 2 depths', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        'height: 100px;',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;

    .aaa {
        height: 100px;
    }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

// Space Before Class False
test('formatProperties Space Before Class False, 1 depth', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '}',
        '.aaa {',
        'height: 100px;',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;
}
.aaa {
    height: 100px;
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('formatProperties Space Before Class True, 2 depths', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: false,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        'height: 100px;',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;
    .aaa {
        height: 100px;
    }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});


// =============================================================
// ============== Test Space Insert Final New Line =============
// =============================================================

test('formatProperties insert Final New line, true', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        'height: 100px;',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;

    .aaa {
        height: 100px;
    }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('formatProperties insert Final New line, false', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: false,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        'height: 100px;',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;

    .aaa {
        height: 100px;
    }
}`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});
// =============================================================
// ============== Tmp =============
// =============================================================

test('tmp1', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.asd {',
        'width: 100px;',
        '.aaa {',
        '}',
        '}'
    ];

    const expectedResult =
`
.asd {
    width: 100px;

    .aaa {
    }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('tmp2', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.header-large {',
        'display: flex;',
        'justify-content: space-between;',
        'align-items: center;',
        '@include utils.set-width();',
        '@include utils.set-padding(',
        'var(--wlt-space-base),',
        '$wlt-vprt-grid--margin',
        ');',
        '}'
    ];

    const expectedResult =
`
.header-large {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include utils.set-width();
    @include utils.set-padding(
        var(--wlt-space-base),
        $wlt-vprt-grid--margin
    );
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('tmp3', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.navigation-btns {',
        'margin-top: 50px;',
        'display: flex;',
        'gap: 16px;',
        '.next-btn {',
        'width: 230px;',
        'gap: 8px;',
        '}',
        '.asd {',
        '}',
        '}',
    ];

    const expectedResult =
`
.navigation-btns {
    margin-top: 50px;
    display: flex;
    gap: 16px;

    .next-btn {
        width: 230px;
        gap: 8px;
    }

    .asd {
    }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('tmp4', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.required-photos {',
        'margin-top: 10px;',
        'display: flex;',
        'flex-wrap: wrap;',
        '// TODO: 1/3 of the width have to be set here',
        'gap: 16px;',
        '}',
    ];

    const expectedResult =
`
.required-photos {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    // TODO: 1/3 of the width have to be set here
    gap: 16px;
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});

test('tmp4', () => {
    const config: Config = {
        orderList: [],
        tabSize: 4,
        spaceBeforeClass: true,
        insertFinalNewline: true,
    };

    const propertieslist: string[] = [
        '.required-photos {',
        '.asd {',
        '}',
        '}',
    ];

    const expectedResult =
`
.required-photos {
    .asd {
    }
}
`.slice(1);

    expect(formatProperties(config, propertieslist)).toStrictEqual(expectedResult);
});
