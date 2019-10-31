function areThereDuplicates(...args) {
    return new Set(args).size !== args.length
}