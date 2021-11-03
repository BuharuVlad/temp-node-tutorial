const amount = 9;
/**
 * Globals - no window!!!
 *
 *  __dirname     - path to current directory
 *  __filename    - file name
 *  require      - function to use modeles (CommonJS)
 *  module       - info about current module (file)
 *  process      - info about environment where the program is being executed
 *
 * when we work in vanilla.js applications we know a vert cool
 * thing is the fact that we have access to the window object and
 * reason why it's so cool because in the window object
 * we can get a bunch of useful things:
 *  - we can get a querySelector so I can select a node
 *  - I can get built-in fetch
 *
 * globals variables means that anywhere in your application you can
 * access them so no matter how complex my applicaton gets
 * I'll always have access to those variables.
 *
 */

// console.log(__dirname);
/**
 * Display
 * F:\Facultate\Facultate\Anul 3\Sem I\Tehnologie WEB\Youtube Java Script\Node.Js and Express.JS - Full Course\tutorial
 */

//just like in the event js we have setInterval, setTimeout

// setInterval(() => {
//     console.log('hello word');
// }, 1000);

// setTimeout(() => {
//     console.log('Timeout started');
// }, 1500);


// console.log(__filename);
/**
 * Display
 * F:\Facultate\Facultate\Anul 3\Sem I\Tehnologie WEB\Youtube Java Script\Node.Js and Express.JS - Full Course\tutorial\app.js
 */

// console.log(require);
/**
 * Display
 *
  [Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial',
    exports: {},
    filename: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\app.js',
    loaded: false,
    children: [],
    paths: [
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\node_modules',
      'F:\\Facultate\\Facultate\\node_modules',
      'F:\\Facultate\\node_modules',
      'F:\\node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\app.js': Module {
      id: '.',
      path: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial',
      exports: {},
      filename: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\app.js',
      loaded: false,
      children: [],
      paths: [Array]
    }
  }
}
 */

// console.log(module);
/**
 * Display
 *
 Module {
  id: '.',
  path: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial',
  exports: {},
  filename: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\app.js',
  loaded: false,
  children: [],
  paths: [
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\node_modules',
    'F:\\Facultate\\Facultate\\node_modules',
    'F:\\Facultate\\node_modules',
    'F:\\node_modules'
  ]
}
 */

// console.log(process);
/**
 * Display
 process {
  version: 'v17.0.1',
  versions: {
    node: '17.0.1',
    v8: '9.5.172.21-node.12',
    uv: '1.42.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.17.2',
    modules: '102',
    nghttp2: '1.45.1',
    napi: '8',
    llhttp: '6.0.4',
    openssl: '3.0.0+quic',
    cldr: '39.0',
    icu: '69.1',
    tz: '2021a',
    unicode: '13.0',
    ngtcp2: '0.1.0-DEV',
    nghttp3: '0.1.0-DEV'
  },
  arch: 'x64',
  platform: 'win32',
  release: {
    name: 'node',
    sourceUrl: 'https://nodejs.org/download/release/v17.0.1/node-v17.0.1.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v17.0.1/node-v17.0.1-headers.tar.gz',
    libUrl: 'https://nodejs.org/download/release/v17.0.1/win-x64/node.lib'
  },
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [
    'Internal Binding native_module',
    'Internal Binding errors',
    'NativeModule internal/errors',
    'Internal Binding config',
    'Internal Binding constants',
    'Internal Binding util',
    'Internal Binding types',
    'NativeModule internal/util',
    'NativeModule internal/util/types',
    'NativeModule internal/assert',
    'NativeModule internal/validators',
    'Internal Binding icu',
    'NativeModule internal/util/inspect',
    'NativeModule events',
    'Internal Binding buffer',
    'Internal Binding string_decoder',
    'NativeModule internal/buffer',
    'Internal Binding blob',
    'NativeModule internal/encoding',
    'Internal Binding symbols',
    'Internal Binding messaging',
    'NativeModule internal/worker/js_transferable',
    'NativeModule internal/blob',
    'NativeModule buffer',
    'NativeModule internal/process/per_thread',
    'Internal Binding process_methods',
    'Internal Binding credentials',
    'Internal Binding async_wrap',
    'Internal Binding task_queue',
    'NativeModule internal/async_hooks',
    'NativeModule async_hooks',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'NativeModule internal/process/task_queues',
    'Internal Binding trace_events',
    'NativeModule internal/constants',
    'NativeModule internal/console/constructor',
    'NativeModule internal/console/global',
    'NativeModule internal/util/inspector',
    'Internal Binding inspector',
    'NativeModule internal/querystring',
    'NativeModule path',
    'NativeModule querystring',
    'Internal Binding url',
    'NativeModule internal/url',
    'NativeModule internal/util/debuglog',
    'NativeModule util',
    'Internal Binding performance',
    'NativeModule internal/perf/utils',
    'NativeModule internal/event_target',
    'NativeModule internal/abort_controller',
    'Internal Binding worker',
    'NativeModule internal/streams/utils',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/destroy',
    'NativeModule internal/streams/legacy',
    'NativeModule internal/streams/add-abort-signal',
    'NativeModule internal/streams/buffer_list',
    'NativeModule internal/streams/state',
    'NativeModule string_decoder',
    'NativeModule internal/streams/from',
    'NativeModule internal/streams/readable',
    'NativeModule internal/streams/writable',
    'NativeModule internal/streams/duplex',
    'NativeModule internal/streams/pipeline',
    'NativeModule internal/streams/compose',
    'NativeModule stream/promises',
    'NativeModule internal/streams/transform',
    'NativeModule internal/streams/passthrough',
    'NativeModule stream',
    'NativeModule internal/worker/io',
    'Internal Binding timers',
    'NativeModule internal/linkedlist',
    'NativeModule internal/priority_queue',
    'NativeModule internal/timers',
    'NativeModule timers',
    'NativeModule internal/perf/performance_entry',
    'NativeModule internal/perf/observe',
    'NativeModule internal/perf/nodetiming',
    'NativeModule internal/perf/usertiming',
    'NativeModule internal/perf/event_loop_utilization',
    'NativeModule internal/histogram',
    'NativeModule internal/perf/timerify',
    'NativeModule internal/perf/performance',
    'NativeModule internal/perf/event_loop_delay',
    'NativeModule perf_hooks',
    'NativeModule internal/structured_clone',
    'NativeModule internal/process/execution',
    'NativeModule internal/process/warning',
    'Internal Binding fs',
    'NativeModule internal/fs/utils',
    'Internal Binding fs_dir',
    'NativeModule internal/fs/dir',
    'Internal Binding fs_event_wrap',
    'Internal Binding uv',
    'NativeModule internal/fs/watchers',
    'NativeModule internal/fs/read_file_context',
    'NativeModule fs',
    'Internal Binding serdes',
    'Internal Binding profiler',
    ... 54 more items
  ],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype] {
    newListener: [Function: startListeningIfSignal],
    removeListener: [Function: stopListeningIfSignal],
    warning: [Function: onWarning],
    SIGWINCH: [Function (anonymous)]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  domain: null,
  _exiting: false,
  config: [Getter/Setter],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
  kill: [Function: kill],
  exit: [Function: exit],
  openStdin: [Function (anonymous)],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  assert: [Function: deprecated],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    cached_builtins: [Getter]
  },
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  env: {
    ALLUSERSPROFILE: 'C:\\ProgramData',
    APPDATA: 'C:\\Users\\buhar\\AppData\\Roaming',
    ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
    ChocolateyLastPathUpdate: '132646972718665963',
    CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_7376_STHHRVMLEYVGGZPP',
    CommonProgramFiles: 'C:\\Program Files\\Common Files',
    'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
    CommonProgramW6432: 'C:\\Program Files\\Common Files',
    COMPUTERNAME: 'DESKTOP-5QEJAVH',
    ComSpec: 'C:\\Windows\\system32\\cmd.exe',
    DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
    HOMEDRIVE: 'C:',
    HOMEPATH: '\\Users\\buhar',
    'IntelliJ IDEA': 'C:\\Program Files\\JetBrains\\IntelliJ IDEA 2021.1\\bin;',
    JAVA_HOME: 'C:\\Program Files\\Java\\jdk-11.0.11',
    LOCALAPPDATA: 'C:\\Users\\buhar\\AppData\\Local',
    LOGONSERVER: '\\\\DESKTOP-5QEJAVH',
    M2_HOME: 'C:\\Program Files\\apache-maven-3.8.1',
    MAVEN_HOME: 'C:\\Program Files\\apache-maven-3.8.1',
    NUMBER_OF_PROCESSORS: '4',
    OneDrive: 'C:\\Users\\buhar\\OneDrive',
    OneDriveConsumer: 'C:\\Users\\buhar\\OneDrive',
    ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
    OS: 'Windows_NT',
    PATH: 'C:\\Users\\buhar\\AppData\\Local\\cloud-code\\installer\\google-cloud-sdk\\bin;C:\\Python310\\Scripts\\;C:\\Python310\\;C:\\Python39\\Scripts\\;C:\\Python39\\;C:\\Program Files\\Java\\jdk-11.0.11\\bin;C:\\Program Files\\Java\\jdk-15.0.2\\jdk-15.0.2\\bin;C:\\Program Files\\apache-maven-3.8.1\\bin;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\PostgreSQL\\13\\lib;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Program Files\\PostgreSQL\\9.6\\bin;C:\\Program Files\\PostgreSQL\\9.6\\lib;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\dotnet\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\nodejs\\;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin\\;C:\\Users\\buhar\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\buhar\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\buhar\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2021.1\\bin;;C:\\Users\\buhar\\.dotnet\\tools;C:\\Users\\buhar\\AppData\\Roaming\\npm',
    PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL',
    PROCESSOR_ARCHITECTURE: 'AMD64',
    PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 94 Stepping 3, GenuineIntel',
    PROCESSOR_LEVEL: '6',
    PROCESSOR_REVISION: '5e03',
    ProgramData: 'C:\\ProgramData',
    ProgramFiles: 'C:\\Program Files',
    'ProgramFiles(x86)': 'C:\\Program Files (x86)',
    ProgramW6432: 'C:\\Program Files',
    PSModulePath: 'C:\\Users\\buhar\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules',
    PUBLIC: 'C:\\Users\\Public',
    SESSIONNAME: 'Console',
    SystemDrive: 'C:',
    SystemRoot: 'C:\\Windows',
    TEMP: 'C:\\Users\\buhar\\AppData\\Local\\Temp',
    TMP: 'C:\\Users\\buhar\\AppData\\Local\\Temp',
    USERDOMAIN: 'DESKTOP-5QEJAVH',
    USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-5QEJAVH',
    USERNAME: 'buhar',
    USERPROFILE: 'C:\\Users\\buhar',
    VBOX_MSI_INSTALL_PATH: 'C:\\Program Files\\Oracle\\VirtualBox\\',
    VS160COMCOMNTOOLS: 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Community\\Common7\\Tools\\',
    windir: 'C:\\Windows',
    TERM_PROGRAM: 'vscode',
    TERM_PROGRAM_VERSION: '1.61.2',
    LANG: 'en_US.UTF-8',
    COLORTERM: 'truecolor',
    VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-6517c24d62-sock',
    GIT_ASKPASS: 'c:\\Users\\buhar\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',
    VSCODE_GIT_ASKPASS_NODE: 'C:\\Users\\buhar\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
    VSCODE_GIT_ASKPASS_MAIN: 'c:\\Users\\buhar\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js'
  },
  title: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
  argv: [
    'C:\\Program Files\\nodejs\\node.exe',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\app.js'
  ],
  execArgv: [],
  pid: 11392,
  ppid: 18964,
  execPath: 'C:\\Program Files\\nodejs\\node.exe',
  debugPort: 9229,
  hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  argv0: 'C:\\Program Files\\nodejs\\node.exe',
  _preload_modules: [],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  mainModule: Module {
    id: '.',
    path: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial',
    exports: {},
    filename: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\app.js',
    loaded: false,
    children: [],
    paths: [
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\node_modules',
      'F:\\Facultate\\Facultate\\Anul 3\\node_modules',
      'F:\\Facultate\\Facultate\\node_modules',
      'F:\\Facultate\\node_modules',
      'F:\\node_modules'
    ]
  },
  [Symbol(kCapture)]: false
}
 */




